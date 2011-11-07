/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jeu.model;

/**
 *
 * @author nicolas
 */
public class Partie {
    private int[][] echiquier;
    
    public Partie() {
        echiquier = new int[8][8];
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                /*if () {
                    
                } else if () {
                    
                } else {
                    
                }*/
            }
        }
    }
    
    public boolean leDeplacementEstPossible(int dx, int dy, int fx, int fy) {
        return true;
    }
    
    public void faireDeplacement(int dx, int dy, int fx, int fy) {
        
    }
}
