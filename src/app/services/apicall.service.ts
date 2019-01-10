import { Injectable } from '@angular/core';
import { config } from './../../config/cosmic.config';
import { Http } from '@angular/http';
import { userModel } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private _http: Http) { }

  //logging user in
  login(userModel: userModel) {
    return this._http.get(config.URL + config.bucket_slug + "/object-type/users/search", {

      params: {
        metafield_key: 'email',
        metafield_value: userModel.email,
        limit: 1,
        read_key: config.read_key
      }
    })
  }

  //register user with email
  register(data: userModel) {
    console.log(data.password);
    return this._http.post(config.URL + config.bucket_slug + "/add-object/", {
      title: data.fullName, slug: data.fullName + data.email, type_slug: 'users', write_key: config.write_key,

      metafields: [
        {
          key: "fullName",
          type: "text",
          value: data.fullName
        },
        {
          key: "email",
          type: "text",
          value: data.email
        },
        {
          key: "password",
          type: "text",
          value: data.password
        },
        {
          key: "gender",
          type: "text",
          value: data.gender
        },
        {
          key: "mobile",
          type: "text",
          value: data.mobile
        },

      ]
    })
  }

  //check presence of Google user in Cosmic JS database
  checkGoogleUser(data) {
    console.log(data.email)
    return this._http.get(config.URL + config.bucket_slug + "/object-type/googleusers/search", {

      params: {
        metafield_key: 'email',
        metafield_value: data.email,
        limit: 1,
        read_key: config.read_key
      }
    })
  }

  //register with Google
  googleRegister(data) {
    // console.log(data);
    return this._http.post(config.URL + config.bucket_slug + "/add-object/", {
      title: data.name, slug: data.name + data.email, type_slug: 'googleusers', write_key: config.write_key,

      metafields: [
        {
          key: "fullName",
          type: "text",
          value: data.name
        },
        {
          key: "email",
          type: "text",
          value: data.email
        },
        {
          key: "password",
          type: "text",
          value: 'N/A'
        },
        {
          key: "gender",
          type: "text",
          value: "N/A"
        },
        {
          key: "mobile",
          type: "text",
          value: "N/A"
        },
        {
          key: "image",
          type: "text",
          value: data.image
        },

      ]
    })
  }

}
