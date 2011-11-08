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
    private String joueur1;
    private String joueur2;
    public Partie() {
        echiquier = new int[8][8];
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (i<2) {
                    echiquier[i][j] = 1;
                } else if (i>5) {
                    echiquier[i][j] = 2;
                } else {
                    echiquier[i][j] = 0;
                }
            }
        }
    }
    
    public boolean leDeplacementEstPossible(int dx, int dy, int fx, int fy) {
        //(dx >= 0 && dx < 8)
        return true;
    }
    
    public void faireDeplacement(int dx, int dy, int fx, int fy) {
        
    }

    /**
     * @return the joueur1
     */
    public String getJoueur1() {
        return joueur1;
    }

    /**
     * @param joueur1 the joueur1 to set
     */
    public void setJoueur1(String joueur1) {
        this.joueur1 = joueur1;
    }

    /**
     * @return the joueur2
     */
    public String getJoueur2() {
        return joueur2;
    }

    /**
     * @param joueur2 the joueur2 to set
     */
    public void setJoueur2(String joueur2) {
        this.joueur2 = joueur2;
    }
}
