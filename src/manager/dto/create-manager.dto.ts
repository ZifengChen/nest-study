export class CreateManagerDto {
  name: string;
  money: number;
}

export class transferMoneyDto {
  fromId: number;
  toId: number;
  money: number;
}
