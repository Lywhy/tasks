enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface UserData {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthdate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    ip: string,
    address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
            lat: number,
            lng: number
        },
        country: string
    },
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        department: "Engineering",
        name: "Dooley, Kozey and Cronin",
        title: "Sales Manager",
        address: {
            address: string,
            city: string,
            state: string,
            stateCode: string,
            postalCode: string,
            coordinates: {
                lat: number,
                lng: number
            },
            country: string
        }
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: string
}

async function fetchAllUser(): Promise<UserData | null> {
    try {
        const response = await fetch('https://dummyjson.com/users', { method: HttpMethod.GET })
        console.log(response)
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(`HTTP ${response.status}: Ошибка получения данных!`);
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Ошибка: ${err.message}`);
        }
        return null
    }
}

console.log(fetchAllUser().then(res => console.log(res)))