/**
 * Class for project.
 */
export default class Project {
  id: string;
  name: string;
  type: string | null;
  uri: string | null;
  uriData: any | null;
  roles: any | null;
  posts: any | null;

  constructor(
    id: string,
    name: string,
    type: string | null,
    uri: string | null,
    uriData: any | null,
    roles: any | null,
    posts: any | null,
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.uri = uri;
    this.uriData = uriData;
    this.roles = roles;
    this.posts = posts;
  }
}
