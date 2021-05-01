const fs = require("fs");

const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");

const { zookeepers } = require("../data/zookeepers");

jest.mock("fs");

test("test query", () => {
    const startingZookeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
        },
        {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
        },
    ];

    const updatedZookeepers = filterByQuery({age: 28}, startingZookeepers);
    expect(updatedZookeepers.length).toEqual(1);

});

test("find by id", () => {
    const startingZookeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
        },
        {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
        },
    ];

    const result = findById("0", startingZookeepers);
    expect(result.name).toBe("Kim");
});

test("create a new zookeeper", () => {
    const zookeeper = createNewZookeeper(
        {
            name: "Boo",
            id: "eoeowoe323"
        },
        zookeepers
    );

    expect(zookeeper.name).toBe("Boo");
    expect(zookeeper.id).toBe("eoeowoe323");

});

test("validate a zookeeper", () => {
    const zookeeper = {
        id: "100",
        name: "Boo",
        age: 88,
        favoriteAnimal: "penguin"
    }

    const invalidZookeeper = {
        id: "100",
        name: "Boo",
        age: 88,
    }

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});