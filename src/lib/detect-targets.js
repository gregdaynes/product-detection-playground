import $ from 'jquery';
import { getCommonAncestor } from './common-ancestor';

export function detectTargets(handles) {
  for (let i = 0; i < handles.length; i++) {
    let targetMedia;
    const links = $(`a[href*="/${handles[i]}"]`);

    // find child images,
    let images = links.find("img");
    // find siblings
    if (images.length == 0) {
      images = links.parent().find("img");
    }
    // find ancestors
    if (images.length == 0) {
      images = $(getCommonAncestor(`[href*='/${handles[i]}']`, "img")).find(
        "img"
      );
    }

    targetMedia = images.map((_index, image) => {
      const parentPicture = $(image).parent("picture");
      if (parentPicture.length > 0) {
        return parentPicture[0];
      }
      return image;
    });
  }
}
