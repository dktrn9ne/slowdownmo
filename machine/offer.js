const launchKit = document.getElementById('launchKit');
function updateOffer() {
  const withLaunch = launchKit.checked;
  const name = withLaunch ? 'Handcrafted Single + Launch Kit' : 'Handcrafted Single';
  const price = withLaunch ? '$1,500' : '$1,000';
  const deposit = withLaunch ? '$750' : '$500';
  document.getElementById('packageLabel').textContent = name.toUpperCase();
  document.getElementById('packageTotal').textContent = price;
  document.getElementById('packageDeposit').textContent = '50% deposit: ' + deposit;
  const subject = 'Slowdown Mo — ' + name + ' inquiry';
  const body = 'Hi Slowdown Mo,\n\nI would like to discuss booking the ' + name + ' (' + price + ').\n\nI understand that a 50% deposit (' + deposit + ') reserves my project, with the remaining balance due before final delivery.\n\nMy sound, story, and project ideas:\n\nPreferred session dates:\n\nThanks!';
  const href = 'mailto:booking@slowdownmo.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  document.getElementById('reserveSingle').href = href;
  document.getElementById('bookSingle').href = href;
}
launchKit.addEventListener('change', updateOffer);
window.addEventListener('pageshow', updateOffer);
updateOffer();
