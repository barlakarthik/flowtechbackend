import permissionsData from '../data/permissions.js';
const getPermissions = async (req, res) => {
    try {
        return await res.status(201).json(permissionsData);
    } catch (error) {
        return res.status(500).json({ error: "Intrenal server error" })
    }
}
export {
    getPermissions
}