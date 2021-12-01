import {RolleDto} from './RolleDto';
import {FuehrerscheinDto} from './Fuehrerschein';

export class BenutzerDto{
  personId: number;
  firstname: string;
  lastname: string;
  eMail: string;
  password: string;
  geburtsdatum: Date;
  rolle: RolleDto;
  führerscheine: FuehrerscheinDto;


}
