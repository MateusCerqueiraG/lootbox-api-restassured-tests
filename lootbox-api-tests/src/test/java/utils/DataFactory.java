package utils;

import models.Item;
import models.LootBox;

public class DataFactory {

    // cria LootBox compatível com seu model atual
    public static LootBox createLootBox(Item item, int coins, String message) {
        LootBox lootBox = new LootBox();
        lootBox.setItem(item);
        lootBox.setCoins(coins);
        lootBox.setMessage(message);
        return lootBox;
    }

    // cria LootBox padrão (simples)
    public static LootBox createDefaultLootBox() {
        LootBox lootBox = new LootBox();
        lootBox.setMessage("default");
        lootBox.setCoins(0);
        return lootBox;
    }
}