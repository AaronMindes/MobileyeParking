const API_URL: string = "https://20qthdi36m.execute-api.eu-west-3.amazonaws.com/dev/spots/";
const API_KEY: string = "n0odfzmqlIav4GG1M7tL3aIz66FOToIZ521hwJoU";

export const fetchSpots = async () => {
  try {
    const res = await fetch(`${API_URL}get_spots`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'x-api-key': API_KEY 
      },

    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const allocateSpot = async (spotNum, vehicleDetails) => {
  try {
    const response = await fetch(`${API_URL}set_spot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({
        spot_num: spotNum,
        license_plate: vehicleDetails.license_plate,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to allocate spot');
    }

    console.log(`Spot ${spotNum} allocated for ${vehicleDetails.license_plate}`);
  } catch (error) {
    console.error('Error allocating spot:', error);
    throw error;
  }
};


export const releaseSpot = async (spotNum) => {
  try {
    const response = await fetch(`${API_URL}/release_spot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({
        spot_num: spotNum,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to release spot');
    }

    console.log(`Spot ${spotNum} released`);
  } catch (error) {
    console.error('Error releasing spot:', error);
    throw error;
  }
};