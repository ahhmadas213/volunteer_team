// Defines the structure for an initiative object
export interface BasicInitiative {
  initiative_name: string;
  type: string;
  location: string;
  number_of_participants: number;
}

export interface Initiative extends BasicInitiative {
  id?: string; // Optional: if you plan to add unique IDs later
  thumbnail: string;
  title: string;
  description?: string;
  shortDescription?: string;
}