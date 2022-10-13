import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'extractNumber'})
export class ExtractNumberPipe implements PipeTransform {
  transform(value: string) {

    const replaced = value.replace(/\D/g, ''); // 👉️ '123'
    return replaced;

  }
}
