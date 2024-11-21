export interface ApiType {
  listPosts: any[];
  listEvents: any[];
  listProjects: any[];
  listTrainings: any[];
  setEmail: any;
  email: any;
  getPosts: () => void;
  getEvents: () => void;
  getProjects: () => void;
  getTrainings: () => void;
  postSubscribe: () => void;
}