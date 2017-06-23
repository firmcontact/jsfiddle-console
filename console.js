/**
 * @author rudy sandoval / http://rainworks.io/
 */

function Flogger() {
	let hasStyle = arguments.length > 0 ? arguments[0] : true;
	let div = document.createElement("div");
	let body = document.getElementsByTagName("body")[0];
  
  if (hasStyle) div.style.cssText = 'margin: 10px 0; padding: 10px; background: #ffffff; border: 1px solid #dedede;height:200px; overflow-y:auto;';
  
  body.insertBefore(div, body.childNodes[0]);
  
	this.type = 'Flogger';
	this.log = (obj) => {
		let text = document.createTextNode(typeof obj === 'object' ? JSON.stringify(obj, null, 3) : typeof obj === 'function' ? obj() : obj);
		let item = document.createElement("p");
		item.appendChild(text);
		div.appendChild(item);
		div.scrollTop += 50;
	}
}
