import getImagen from "../../base/11-async-await";

describe("11-async-await test", () => {
    test("should return url string", async () => {
        const url = await getImagen();

        expect(typeof url).toBe("string");
    });
});
