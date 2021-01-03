<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
	<xsl:template match = "catalog">
        <html>
            <head>
                <title> Style sheet for HW7_Step4.xml </title>
            </head>
            <body style="text-align:center">
                <h2 style="text-align:center; font-size: 20pt; font-style: bold; color:black;">Car Catalog</h2>
                <table border="1" align="center" text-align="center">
                    <tr bgcolor="lightgrey">
                        <th style="text-align:center">Make</th>
                        <th style="text-align:center">Model</th>
                        <th style="text-align:center">Year</th>
                        <th style="text-align:center">Color</th>
                        <th style="text-align:center"># of Doors</th>
                        <th style="text-align:center">Transmission</th>
                        <th style="text-align:center">Engine</th>
                        <th style="text-align:center">Accessories</th>
                    </tr>                    
                    <xsl:for-each select="car">
                        <tr>
                            <td>
                                <xsl:value-of select="make"/>
                            </td>
                            <td>
                                <xsl:value-of select="model"/>
                            </td>
                            <td>
                                <xsl:value-of select="year"/>
                            </td>
                            <td>
                                <xsl:value-of select="color"/>
                            </td>
                            <td>
                                <xsl:value-of select="number_of_doors"/>
                            </td>
                            <td>
                                <xsl:value-of select="transmission_type"/>
                            </td>
                            <td>
                                <span>Cylinders: </span>
                                <xsl:value-of select="engine/cylinders"/>
                                <br />
                                <xsl:value-of select="engine/fuel_system"/>
                            </td>
                            <td>
                                <span>Radio: </span>
                                <xsl:value-of select="accessories/@radio"/>
                                <br />
                                <span>AC: </span>
                                <xsl:value-of select="accessories/@air_conditioning"/>
                                <br />
                                <span>Power Windows: </span>
                                <xsl:value-of select="accessories/@power_windows"/>
                                <br />
                                <span>Power Steering: </span>
                                <xsl:value-of select="accessories/@power_steering"/>
                                <br />
                                <span>Power Brakes: </span>
                                <xsl:value-of select="accessories/@power_brakes"/>
                                <br />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
	</xsl:template>
</xsl:stylesheet>

<!-- Victor Nguyen (nguye481)- Create an XSLT style sheet for three car elements of HW7_Step2.xml -->