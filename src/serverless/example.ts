export async function getIP() {
  return (await fetch("https://wtfismyip.com/text")).text();
}
