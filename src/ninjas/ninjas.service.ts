import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninjaA', weapon: 'stars' },
    { id: 1, name: 'ninjaB', weapon: 'nunchucks' },
  ];

  getNinjas(weapon?: 'star' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninjas) => ninjas.weapon === weapon);
    }
    return this.ninjas;
  }
}
