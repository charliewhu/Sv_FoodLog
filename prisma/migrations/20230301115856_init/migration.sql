-- CreateTable
CREATE TABLE "Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "protein" INTEGER NOT NULL,
    "carb" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL
);
