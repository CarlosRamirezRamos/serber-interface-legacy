package controllers

import play.api.mvc.{Action, Controller}

import views._

/** Application */
object Application extends Controller {

  def index = Action {
    Ok(html.index("Welcome to SERBER|pilot - Home"))
  }

  def webInterface = Action {
    Ok(html.webinterface("SERBER - Web Interface", "WebInterface"))
  }

  def webServices = Action {
    Ok(html.webservices("SERBER - Web Services", "WebServices"))
  }

  def dataModel = Action {
    Ok(html.datamodel("SERBER - Data Model", "DataModel"))
  }

  def metadata = Action {
    Ok(html.metadata("SERBER - Metadata", "Metadata"))
  }

  def linkedData = Action {
    Ok(html.linkeddata("SERBER - Linked Data", "LinkedData"))
  }

  def foss = Action {
    Ok(html.foss("SERBER - FOSS", "FOSS"))
  }

  def references = Action {
    Ok(html.references("SERBER - References", "References"))
  }

  def notes = Action {
    Ok(html.notes("pilot - Notes", "Notes"))
  }

  def registryData = Action {
    Ok(html.registry("pilot - Registry Data", "RegistryData", None))
  }

  def registryObject(key: Long) = Action {
    Ok(html.registry("pilot - Registry Object", "RegistryObject", Some(key)))
  }
}
