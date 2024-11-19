import puppeteer from "puppeteer";
import { fintechDB, saveEvent, saveTraining } from "../model/fintechDB.js";

export async function scrapeEvents(req, res) {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300,
  });

  try {
    // Primera página: Mujeres Fintech
    const page1 = await browser.newPage();
    await page1.goto('https://mujeresfintech.co/eventos/', {
      waitUntil: 'networkidle2',
      timeout: 0 // Aumenta el tiempo de espera indefinido
    });

    const dataOne = await page1.evaluate(() => {
      const items = [];
      document.querySelectorAll('.elementor-element').forEach(item => {
        const titleElement = item.querySelector('strong');
        const contentElement = item.querySelector('pre');

        const title = titleElement ? titleElement.innerText : '';
        const content = contentElement ? contentElement.innerText.trim() : '';

        const imgElement = item.querySelector('img');
        const imgUrl = imgElement ? imgElement.src : '';

        if (title && content) {
          items.push({ title, content, imgUrl });
        }
      });
      return items;
    });

    await page1.close();

    for (const evento of dataOne) {
      await saveEvent(evento);
    }

    // Segunda página: Innovate Finance
    const page2 = await browser.newPage();
    await page2.goto('https://www.innovatefinance.com/events/', {
      waitUntil: 'networkidle2',
      timeout: 0 // Aumenta el tiempo de espera indefinido
    });

    const dataTwo = await page2.evaluate(() => {
      const items = [];
      
      // Seleccionar solo los elementos <a> con los atributos específicos
      document.querySelectorAll('a').forEach(item => {
        const titleElem = item.querySelector('h2');
        const contentElem = item.querySelector('p');
    
        const title = titleElem ? titleElem.innerText : '';
        const content = contentElem ? contentElem.innerText : '';
    
        // Extraer la URL de la imagen desde el estilo de fondo en el div con la clase "relative bg-image"
        const bgImageDiv = item.querySelector('div.relative.bg-image');
        let imgUrl = '';
        if (bgImageDiv) {
          const style = window.getComputedStyle(bgImageDiv);
          const background = style.background;
          const imgMatch = background.match(/url\(["']?([^"']+)["']?\)/);
          imgUrl = imgMatch ? imgMatch[1] : '';
        }
    
        // Obtener el href del elemento <a>
        const hrefUrl = item.href;
    
        // Añadir el elemento al array si tiene título y contenido
        if (title && content) {
          items.push({ title, content, hrefUrl, imgUrl });
        }
      });
      
      return items;
    });

    // Mostrar los datos en la consola antes de cerrar la página y guardar en la base de datos
    console.log("Datos de la segunda página (Innovate Finance):", dataTwo);

    await page2.close();

    for (const evento of dataTwo) {
      await saveEvent(evento);
    }

    await browser.close();
    res.status(200).json({ message: "Data scraped and saved successfully!" });

  } catch (error) {
    console.error("Error during scraping:", error);
    res.status(500).json({ message: "An error occurred during scraping" });
    await browser.close();
  }
}


export async function scrapeTrainer(req, res) {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300,
  });

  try {
    const page1 = await browser.newPage();
    await page1.goto('https://www.leadsmujer.com/cursos/', {
      waitUntil: 'networkidle2',
      timeout: 0,
    });

    const dataOne = await page1.evaluate(() => {
      const items = [];
      document.querySelectorAll('div.elementor-column').forEach(item => {

        const imgElement = item.querySelector('div.elementor-widget-wrap a img');
        const imgUrl = imgElement ? imgElement.src : '';
        
        // Obtener el título del h3 > a
        const titleElement = item.querySelector('h3.elementor-heading-title a');
        const title = titleElement ? titleElement.innerText : '';

        // Obtener el contenido de p > em
        const contentElement = item.querySelector('p em');
        const content = contentElement ? contentElement.innerText : '';

        // Obtener el href del botón de enlace
        const linkElement = item.querySelector('a.elementor-button-link');
        const hrefUrl = linkElement ? linkElement.href : '';

        // Agregar a la lista solo si hay título y contenido
        if (title && content) {
          items.push({ title, content, hrefUrl, imgUrl });
        }
      });
      return items;
    });

    console.log("Datos extraídos:", dataOne); // Verificar los datos obtenidos

    await page1.close();

    for (const training of dataOne) {
      await saveTraining(training);
    }

    // Segunda página training
    const page2 = await browser.newPage();
    await page2.goto('https://bootcamp.laboratoria.la/es/', {
      waitUntil: 'networkidle2',
      timeout: 0
    })

    const dataTwo = await page2.evaluate(() => {
      const items = []

      document.querySelectorAll('div').forEach(item => {
        const titleElem = item.querySelector('h3')
        const title = titleElem ? titleElem.innerText : '';

        const contentElem = item.querySelector('p.css-wrh0z');
        const content = contentElem ? contentElem.innerText : '';

        const linkElement = item.querySelector('a.css-nsbfti')
        const hrefUrl = linkElement ? linkElement.href : '';

        const imgElement = item.querySelector('div.MuiGrid-grid-xs-12 a img');
        const imgUrl = imgElement ? imgElement.src : '';
        if (imgUrl && imgUrl.startsWith('/')){
          imgUrl = 'https://bootcamp.laboratoria.la' + imgUrl
        }

        if(title && content){
          items.push({title, content, hrefUrl, imgUrl})
        }
      });
      return items;
    })

    console.log("Datos extraidos:", dataTwo)

    await page2.close();

    for(const training of dataTwo){
      await saveTraining(training)
    }

    await browser.close();
    res.status(200).json({ message: "Data scraped and saved successfully!" });

  } catch (error) {
    console.error("Error durante el scraping:", error);
    res.status(500).json({ message: "Ocurrió un error durante el scraping" });
  } finally {
    await browser.close(); // Asegurar que el navegador se cierre
  }
}


export async function scrapePosts(req, res){
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300,
  })

  try {
    const page1 = await browser.newPage();
    await page1.goto('', {
      waitUntil: 'networkidle2',
      timeout: 0,
    })

    
  } catch (error) {
    
  }
}















// Ver datos scrapeados en un JSON

/*

export async function getEvents(req, res) {
  try {
    const [events] = await fintechDB.query("SELECT * FROM events");
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred retrieving events" });
  }
}

export async function getTrainings(req, res){
  try {
    const [trainings] = await fintechDB.query("SELECT * FROM trainings");
    res.status(200).json(trainings)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: "An error ocurred retrieving trainings"})
  }
}

*/