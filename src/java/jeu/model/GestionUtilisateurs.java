/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jeu.model;

import java.util.ArrayList;

/**
 *
 * @author nicolas
 */
public class GestionUtilisateurs {
    
    private ArrayList<Utilisateur> utilisateurs;
    
    public GestionUtilisateurs() {
        utilisateurs = new ArrayList<Utilisateur>();
    }
    
    public boolean lePseudoEstLibre(String pseudo) {
        for(int i = 0; i < utilisateurs.size(); i++) {
            if (utilisateurs.get(i).getPseudo().equals(pseudo)) {
                return false;
            }
        }
        return true;
    }
    
    public Utilisateur getUtilisateurParPseudo(String pseudo) {
        for(int i = 0; i < utilisateurs.size(); i++) {
            if (utilisateurs.get(i).getPseudo().equals(pseudo)) {
                return utilisateurs.get(i);
            }
        }
        return null;      
    }
    
    public void ajouterUtilisateur(Utilisateur utilisateur) {
        utilisateurs.add(utilisateur);
    }
    
    public ArrayList<Utilisateur> listeUtilisateursLibres() {
        ArrayList<Utilisateur> utilisateursLibre = new ArrayList<Utilisateur>();
        for(int i = 0; i < utilisateurs.size(); i++) {
            if (utilisateurs.get(i).estLibre()) {
                utilisateursLibre.add(utilisateurs.get(i));
            }
        }
        return utilisateursLibre;
    }
}
