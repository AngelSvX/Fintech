import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import axios from "axios";
import { ApiType } from "../types/ApiContext/ApiType";

const ApiContext = createContext<ApiType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [listPosts, setListPosts] = useState([]);
  const [listEvents, setListEvents] = useState([]);
  const [listProjects, setListProjects] = useState([]);
  const [listTrainings, setListTrainings] = useState([]);
  const [email, setEmail] = useState("");

  const getPosts = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getPosts");
      if (response.data?.posts) {
        setListPosts(response.data.posts);
      } else {
        console.error("Las publicaciones no están en la respuesta esperada");
      }
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error);
    }
  }, []);

  const getEvents = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getEvents");
      if (response.data?.events) {
        setListEvents(response.data.events);
      } else {
        console.error("Los eventos no están en la respuesta esperada");
      }
    } catch (error) {
      console.error("Error al obtener los eventos:", error);
    }
  }, []);

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getProjects");
      if (response.data?.projects) {
        setListProjects(response.data.projects);
      } else {
        console.error("Los proyectos no están en la respuesta esperada");
      }
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  }, []);

  const getTrainings = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getTrainings"
      );
      if (response.data?.trainings) {
        setListTrainings(response.data.trainings);
      } else {
        console.error("Las capacitaciones no están en la respuesta esperada");
      }
    } catch (error) {
      console.error("Error al obtener las capacitaciones:", error);
    }
  }, []);

  const postSubscribe = async () => {
    try {
      await axios.post("http://localhost:3000/api/postUser", {
        email: email,
      });
      console.log("Email insertado correctamente", email);
    } catch (error) {
      console.error("Error al insertar suscripción", error);
    }
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [message, setMessage] = useState("");

  const clearInputsMessage = () => {
    setName("");
    setLastName("");
    setEmailForm("");
    setMessage("");
  }

  const postContact = async () => {
    try {
      await axios.post("http://localhost:3000/api/postMessage", {
        name: name,
        lastName: lastName,
        email: emailForm,
        message: message,
      })
      await clearInputsMessage()
      console.log("Email insertado correctamente, ", email)
    } catch (error) {
      console.error("Error al insertar suscripción, ", error)
    }
  }

  return (
    <ApiContext.Provider
      value={{
        listPosts,
        listEvents,
        listProjects,
        listTrainings,
        setEmail,
        email,
        name,
        lastName,
        emailForm,
        message,
        setName,
        setLastName,
        setEmailForm,
        setMessage,
        getPosts,
        getEvents,
        getProjects,
        getTrainings,
        postSubscribe,
        postContact,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("Error al usar el contexto de las APIs");
  }
  return context;
};
