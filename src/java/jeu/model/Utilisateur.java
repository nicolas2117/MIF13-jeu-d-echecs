/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jeu.model;

/**
 *
 * @author nicolas
 */
public class Utilisateur {
    private String pseudo;
    private boolean libre; // un joueur est libre s'il ne joue pas
    private char couleur;
    public Utilisateur(String pseudo) {
        this.pseudo = pseudo;
        libre = true;
        couleur = 'b';
    }
    
    public String getPseudo() {
        return pseudo;
    }
    
    public boolean estLibre() {
        return libre;
    }
    
    public void setLibre(boolean libre) {
        this.libre = libre;
    }

    /**
     * @return the couleur
     */
    public char getCouleur() {
        return couleur;
    }

    /**
     * @param couleur the couleur to set
     */
    public void setCouleur(char couleur) {
        this.couleur = couleur;
    }
}
