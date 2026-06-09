package models;

public class Item {

    private String name;
    private String rarity;

    public Item() {
    }

    public Item(String name, String rarity) {
        this.name = name;
        this.rarity = rarity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
    }
}