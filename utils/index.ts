import { CarProps } from "@/types";

export async function fetchCars(){
    try{
        const headers = {
            'x-rapidapi-key': '70924d1acbmsh5fa2d96a09aabcbp113196jsn7acf6192e8c2',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
            method: 'GET',
            headers: headers
        });
    
        const result = await response.json();
    
        return result;
    } catch (error) {
        console.error('Fetch error:', error);
        
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base Rental Price Per Day in dollars
    const mileageFactor = 0.1; // Additionnal rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of the vehicle age
    
    // Calculate Additional rate based on mileage and age 
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {make, year, model} = car;

    url.searchParams.append('customer', 'img');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('year', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}