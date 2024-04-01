import { Light } from '@/context/moria/feature/doors-of-durin/domain/entity/light/Light';
import { Moonlight } from '@/context/moria/feature/doors-of-durin/domain/entity/light/Moonlight';
import { Starlight } from '@/context/moria/feature/doors-of-durin/domain/entity/light/Starlight';
import { Sunlight } from '@/context/moria/feature/doors-of-durin/domain/entity/light/Sunlight';

export const handleLight = (light: Light): boolean => {
  switch (light.constructor) {
    case Moonlight:
      return true;
    case Starlight:
      return true;
    case Sunlight:
      return false;
    default:
      return false;
  }
};
