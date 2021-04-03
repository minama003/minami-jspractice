(() =>{
  'use strict';

  const button = document.querySelector('button');
  const p = document.querySelector('p');

  function getResult(){
    const bday = moment(document.querySelector('input').value);

    if (!bday.isValid()) {
      return '日付が無効です！';
    }

    const now = moment();
    const age = now.diff(bday,'year');
    const days = now.diff(bday,'day');

    const thisBirthday = bday.clone().year(now.year());
    let nextBirthday;

    if (now.isSameOrAfter(thisBirthday)){
      nextBirthday = thisBirthday.clone().add(1,'year');
    } else {
      nextBirthday = thisBirthday;
    }

    const left = Math.ceil(nextBirthday.diff(now, 'day', true));

    return `今、${age}才です！生まれてから${days}日経ちました！次の誕生日は${nextBirthday.format('LL')}です！あと${left}日です`;
  }

  button.addEventListener('click', () => {
    p.textContent = getResult();
  });
})();