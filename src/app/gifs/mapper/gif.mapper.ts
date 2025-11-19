import { Gif } from "../components/gif/gif.component";
import { Giph } from "../interfaces/giph.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGiph(item : GiphyItem) : Giph{
    return {
      id : item.id,
      title : item.title,
      url: item.images.original.url,
      description: item.slug
    }
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]) : Giph[] {
    return items.map(this.mapGiphyItemToGiph);
  }
}
