import { Pipe, PipeTransform } from '@angular/core';

import { Dog } from './dog-model';

@Pipe({ name: 'filterGender' })
export class GenderPipe implements PipeTransform {
    transform(dogs: Dog[], gender: string): Dog[] {
        console.log('Gender', gender, dogs.filter(d => d.gender === gender));
        return dogs.filter(d => d.gender === gender);
    }
}
