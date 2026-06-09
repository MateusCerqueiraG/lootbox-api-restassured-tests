package models;

import java.util.List;

public class User {

    private int id;
    private String name;
    private int coins;
    private List<Item> inventory;

    public User() {
    }

    public User(int id, String name, int coins, List<Item> inventory) {
        this.id = id;
        this.name = name;
        this.coins = coins;
        this.inventory = inventory;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCoins() {
        return coins;
    }

    public void setCoins(int coins) {
        this.coins = coins;
    }

    public List<Item> getInventory() {
        return inventory;
    }

    public void setInventory(List<Item> inventory) {
        this.inventory = inventory;
    }
}