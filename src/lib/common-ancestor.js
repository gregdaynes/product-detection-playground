import $ from 'jquery';

export function getCommonAncestor(a, b) {
  const $parentsa = $(a).parentsUntil('body');
  const $parentsb = $(b).parentsUntil('body');

  $($parentsb).css('border', '2px solid pink');
  $($parentsb).css('padding', '1px');

  let found = [];

  $parentsa.each(function() {
    const thisa = this;

    $parentsb.each(function() {
      if (thisa == this)
      {
        found.push(this);
        return false;
      }
    });

    // if (found) return false;
  });

  return found;
}

