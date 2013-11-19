/*
 * Application.java
 */


package controllers;

import play.*;
import play.mvc.*;

import views.html.*;


/**
 * Application
 */
public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Welcome to SERBER|pilot - Home"));
    }

    public static Result webInterface() {
        return ok(webinterface.render("SERBER - Web Interface", "WebInterface"));
    }

    public static Result webServices() {
        return ok(webservices.render("SERBER - Web Services", "WebServices"));
    }

    public static Result dataModel() {
        return ok(datamodel.render("SERBER - Data Model", "DataModel"));
    }

    public static Result metadata() {
        return ok(metadata.render("SERBER - Metadata", "Metadata"));
    }

    public static Result linkedData() {
        return ok(linkeddata.render("SERBER - Linked Data", "LinkedData"));
    }

    public static Result foss() {
        return ok(foss.render("SERBER - FOSS", "FOSS"));
    }

    public static Result references() {
        return ok(references.render("SERBER - References", "References"));
    }

    public static Result data() {
        return ok(data.render("pilot - Data", "Data", null));
    }

    public static Result notes() {
        return ok(notes.render("pilot - Notes", "Notes"));
    }

    public static Result registryObject(Long key) {
        return ok(data.render("pilot - Registry Object", "RegistryObject", key));
    }
}
