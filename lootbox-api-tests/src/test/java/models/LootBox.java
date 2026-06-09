package models;

public class LootBox {

    private String message;
    private Item item;
    private int coins;

    public LootBox() {
    }

    public LootBox(String message, Item item, int coins) {
        this.message = message;
        this.item = item;
        this.coins = coins;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getCoins() {
        return coins;
    }

    public void setCoins(int coins) {
        this.coins = coins;
    }
}