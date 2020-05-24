import $ from 'jquery';
import { getCommonAncestor } from './common-ancestor';

export function detectHandles(handles) {
  const handleLinks = handles.map(handle => $(`[href*="/${handle}"]`));
  handleLinks.forEach(link => $(link).css('border', '1px solid blue'));

  let childrenTargets = [];
  let ancestorTargets = [];

  $('img').css('box-shadow', '0 0 1px black')
  $('a img').css('box-shadow', '0 0 1px turquoise')

  handleLinks.forEach(links => {
    links.each((_i, link) => {
      const child = $(link).find('img');
      if (child.length) {
        childrenTargets.push(child);
        return;
      }

      const ancestor = getCommonAncestor(link, 'img');
      if (ancestor) {
        ancestorTargets.push($(ancestor));
        return;
      }
    });
  });

  const x = [...ancestorTargets[0], ...ancestorTargets[1]];
  const y = $.uniqueSort(x);

  console.log(y);
  childrenTargets.forEach(link => $(link).css('border', '1px solid green'));
  ancestorTargets.forEach(link => $(link).css('border', '1px solid purple'));
}

export function detectProductIds() {
  const name = `1590171771774`;
  let y = [];
  const idx = $(`img[id*="${name}"]`)

  idx.each((_index, name) => {
    const ancestor = getCommonAncestor(name, 'img');
    y.push($(ancestor).find('img'));
  });
  y.forEach(z => $(z).css('border', '10px solid orange'));

}


/* PXU Original Detection
 *

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

*/
