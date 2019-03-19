import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCk0TLqFeHi-17AtmYRR5xpqG2uRgkvsoOrBoknI94jMQJP1LuqQZvKV7M8gJyX4m1zCZUK6TF2-TM9dlI2aBs35qe3VvnXBjsaAjEnnre-xEEI9wZyfRmzw8HCgpNPKN8TZFnrVI-Gc6B2QFn4KalnOIkkLg1WtA"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) { }

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
