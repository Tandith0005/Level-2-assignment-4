export const fetchMedicines = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/medicine`, {cache: "no-store"});
        const medicines = await res.json();
        return medicines;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMyMedicines = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/medicine/my`, {cache: "no-store", credentials: "include"});
        const medicines = await res.json();
        return medicines;
    } catch (error) {
        console.log(error);
    }
};

export const deleteMedicine = async (id: string) => {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/medicine/${id}`, {method: "DELETE", credentials: "include"});
    } catch (error) {
        console.log(error);
    }
};