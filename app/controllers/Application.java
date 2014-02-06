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
        return ok(index.render("Welcome to SERBER|pilot - Home", "index"));
    }

    public static Result dataModel() {
        return ok(datamodel.render("SERBER - Data Model", "serber/DataModel"));
    }

    public static Result webServices() {
        return ok(webservices.render("SERBER - Web Services", "serber/WebServices"));
    }

    public static Result webInterface() {
        return ok(webinterface.render("SERBER - Web Interface", "serber/WebInterface")));
    }

    public static Result metadata() {
        return ok(metadata.render("SERBER - Metadata", "serber/Metadata"));
    }

    public static Result linkedData() {
        return ok(linkeddata.render("SERBER - Linked Data", "serber/LinkedData"));
    }

    public static Result foss() {
        return ok(foss.render("SERBER - FOSS", "serber/FOSS"));
    }

    public static Result notes() {
        return ok(notes.render("pilot - Notes", "pilot/Notes"));
    }

    public static Result registryData() {
        return ok(registry.render("pilot - Registry Data", "pilot/RegistryData", null));
    }

    public static Result registryObject(Long key) {
        return ok(registry.render("pilot - Registry Object", "pilot/RegistryObject", key));
    }
}
