import { backendDatabaseReference } from './database';
import { child, DatabaseReference, DataSnapshot, get } from 'firebase/database';
import { APIResponseType, ItemType } from '../common/types';

export class API {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  async fetch(path: string = this.path): Promise<APIResponseType> {
    const returnValue: APIResponseType = await get(
      child(backendDatabaseReference, `v0${path}`)
    )
      .then((snapshot: DataSnapshot) => {
        if (snapshot.exists()) {
          const response: APIResponseType = {
            message: 'Data available!',
            payload: snapshot.val(),
          };
          return response;
        } else {
          const response: APIResponseType = {
            message: 'No data available!',
            payload: [],
          };
          return response;
        }
      })
      .catch((error) => {
        const response: APIResponseType = {
          message: error.toString(),
          payload: [],
        };
        return response;
      });
    return returnValue;
  }

  async fetchItems(IDs: Array<Number>): Promise<Array<APIResponseType>> {
    let items: Array<APIResponseType> = [];
    for await (const ID of IDs.map(async (ID) => {
      let item = await this.fetch(`/item/${ID}`);
      let itemPayload = item.payload as ItemType;
      if (itemPayload.kids) {
        const kids = await this.fetchItems(itemPayload.kids);
        let comments = kids.map((kid) => {
          const comment = kid.payload as ItemType;
          return comment;
        });
        itemPayload.comments = comments;
      }
      return item;
    })) {
      items.push(ID);
    }
    return items;
  }
}

export default API;
