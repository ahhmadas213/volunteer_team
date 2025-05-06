// Defines the structure for an initiative object
export interface Initiative {
  id?: string; // Optional: if you plan to add unique IDs later
  initiative_name: string;
  type: string;
  location: string;
  number_of_participants: number;
}