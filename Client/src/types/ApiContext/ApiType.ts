export interface ApiType {
  listPosts: any[];
  listEvents: any[];
  listProjects: any[];
  listTrainings: any[];
  setEmail: any;
  email: any;
  name: any;
  lastName: any;
  emailForm: any;
  message: any;
  setName: any;
  setLastName: any;
  setEmailForm: any;
  setMessage: any;
  getPosts: () => void;
  getEvents: () => void;
  getProjects: () => void;
  getTrainings: () => void;
  postSubscribe: () => void;
  postContact: () => void;
}