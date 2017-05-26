/**
 * @author rudy sandoval / http://rainworks.io/
 */

function Flogger() {

	this.type = 'Flogger';
	this.log = (obj) => {
		document.getElementsByTagName("body")[0].innerHTML += typeof === 'object' ? `<pre>${JSON.stringify(obj, null, 3)}</pre>` : typeof === 'function' ? obj() : obj;
	}

}

Flogger.prototype.constructor = Flogger;

export { Flogger };
