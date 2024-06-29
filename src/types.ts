export type Aircraft = {
  ident: string,
  type: string,
  economySeats: number
}

export type Flight = {
  ident: string,
  origin: string,
  destination: string,
  readable_departure: string,
  readable_arrival: string,
  departuretime: number,
  arrivaltime: number
}