name := "serber-interface"

version := "0.2-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  //anorm,
  cache
)

play.Project.playScalaSettings
