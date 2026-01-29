export const fetchMedicines = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/medicine`, {cache: "no-store"});
        const medicines = await res.json();
        return medicines;
    } catch (error) {
        console.log(error);
    }
};