import $ from 'jquery';

export function getCommonAncestor(a, b) {
  const $parentsa = $(a).parents();
  const $parentsb = $(b).parents();

  let found = null;

  $parentsa.each(function() {
    const thisa = this;

    $parentsb.each(function() {
      if (thisa == this)
      {
        found = this;
        return false;
      }
    });

    if (found) return false;
  });

  return found;
}

