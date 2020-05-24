import $ from 'jquery';

export function getCommonAncestor(a, b, handle) {
  const $parentsa = $(a).parents();
  const $parentsb = $(b).parents();

  const baseLink = $(a).attr('href').split(handle)[0];

  let found = [];

  $parentsa.each(function() {
    if ($(this).find(`a[href^="${baseLink}"]`).length > 1) return false;

    const thisa = this;

    $parentsb.each(function() {
      if (thisa == this) {
        found.push($(this));
        return false;
      }
    });
  });

  return found;
}

