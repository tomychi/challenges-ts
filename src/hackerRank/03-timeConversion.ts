/** English
 * @function timeConversion
 * @description Converts a 12-hour time string to a 24-hour time string.
 * @param {string} s - The 12-hour time string in the format 'HH:mm:ssAM' or 'HH:mm:ssPM'.
 * @return {string} The 24-hour time string in the format 'HH:mm:ss'.
 */

/** Español
 * @function timeConversion
 * @description Convierte una cadena de tiempo de 12 horas a una cadena de tiempo de 24 horas.
 * @param {string} s - La cadena de tiempo de 12 horas en el formato 'HH:mm:ssAM' o 'HH:mm:ssPM'.
 * @return {string} La cadena de tiempo de 24 horas en el formato 'HH:mm:ss'.
 */

const timeConversion = (s: string): string => {
  let hh = parseInt(s.split(':')[0]);

  if (s.includes('PM') && !s.includes('12')) {
    hh += 12;
  }
  if (s.includes('AM') && s.includes('12')) {
    hh = 0;
  }
  let format24 = s.replace(/[AaPp][Mm]/i, '');

  if (hh === 0) {
    format24 = format24.replace(/^(\d\d)/, `00`);
  } else if (hh < 12) {
    return format24;
  } else {
    format24 = format24.replace(/^(\d\d)/, hh.toString());
  }

  return format24;
};

export { timeConversion };
