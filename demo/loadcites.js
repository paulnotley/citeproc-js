/*
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 *
 * The contents of this file are subject to the Common Public
 * Attribution License Version 1.0 (the \u201cLicense\u201d); you may not use
 * this file except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://bitbucket.org/fbennett/citeproc-js/src/tip/LICENSE.
 *
 * The License is based on the Mozilla Public License Version 1.1 but
 * Sections 14 and 15 have been added to cover use of software over a
 * computer network and provide for limited attribution for the
 * Original Developer. In addition, Exhibit A has been modified to be
 * consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an \u201cAS IS\u201d
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is the citation formatting software known as
 * "citeproc-js" (an implementation of the Citation Style Language
 * [CSL]), including the original test fixtures and software located
 * under the ./std subdirectory of the distribution archive.
 *
 * The Original Developer is not the Initial Developer and is
 * __________. If left blank, the Original Developer is the Initial
 * Developer.
 *
 * The Initial Developer of the Original Code is Frank G. Bennett,
 * Jr. All portions of the code written by Frank G. Bennett, Jr. are
 * Copyright (c) 2009 and 2010 Frank G. Bennett, Jr. All Rights Reserved.
 */

var data = {
	"ITEM-1": {
		"id": "ITEM-1",
		"title":"Boundaries of Dissent: Protest and State Power in the Media Age",
		"author": [
			{
				"family": "D'Arcus",
				"given": "Bruce",
				"static-ordering": false
			}
		],
        "note":"The apostrophe in Bruce's name appears in proper typeset form.",
		"publisher": "Routledge",
		"issued": {
			"date-parts":[
				[2005, 11, 22]
			]
		},
		"type": "book"
	},
	"ITEM-2": {
		"id": "ITEM-2",
		"author": [
			{
				"family": "Bennett",
				"given": "Frank G.",
				"suffix": "Jr.",
				"static-ordering": false
			}
		],
		"title":"Getting Property Right: \"Informal\" Mortgages in the Japanese Courts",
		"container-title":"Pac. Rim L. & Pol'y J.",
		"volume": "18",
		"page": "463-509",
		"issued": {
			"date-parts":[
				[2009, 8]
			]
		},
		"type": "article-journal",
        "note": "Note the flip-flop behavior of the quotations marks around \"informal\" in the title of this citation.  This works for quotation marks in any style locale.  Oh, and, uh, these notes illustrate the formatting of annotated bibliographies (!)."
	},
	"ITEM-3": {
		"id": "ITEM-3",
		"title":"Key Process Conditions for Production of C<sub>4</sub> Dicarboxylic Acids in Bioreactor Batch Cultures of an Engineered <i>Saccharomyces cerevisiae</i> Strain",
        "note":"This cite illustrates the rich text formatting capabilities in the new processor.  Although this particular cite does not exercise it, we also offer robust handling of name particles, such as \"van\" and \"de\" in the author names above.",
		"author": [
			{
				"family": "Zelle",
				"given": "Rintze M."
			},
			{
				"family": "Hulster",
				"given": "Erik",
				"dropping-particle":"de"
			},
			{
				"family": "Kloezen",
				"given": "Wendy"
			},
			{
				"family":"Pronk",
				"given":"Jack T."
			},
			{
				"family": "Maris",
				"given":"Antonius J.A.",
				"dropping-particle":"van"
			}
		],
		"container-title": "Applied and Environmental Microbiology",
		"issued":{
			"date-parts":[
				[2010, 2]
			]
		},
		"page": "744-750",
		"volume":"76",
		"issue": "3",
		"doi":"10.1128/AEM.02396-09",
		"type": "article-journal"
	},
	"ITEM-4": {
		"id": "ITEM-4",
		"author": [
			{
				"family": "Razlogova",
				"given": "Elena"
			}
		],
		"title": "Radio and Astonishment: The Emergence of Radio Sound, 1920-1926",
		"type": "paper-conference",
		"event": "Society for Cinema Studies Annual Meeting",
		"event-place": "Denver, CO",
        "note":"All styles in the CSL repository are supported by the new processor, including the popular Chicago styles by Elena.",
		"issued": {
			"date-parts": [
				[
					2002,
					5
				]
			]
		}
	},
	"ITEM-5": {
		"id": "ITEM-5",
		"author": [
			{
				"family": "\u68b6\u7530",
				"given": "\u5c06\u53f8"
			},
			{
				"family": ":ja-alalc97: Kajita",
				"given": "Shoji"
			},
			{
				"family": "\u89d2\u6240",
				"given": "\u8003"
			},
			{
				"family": ":ja-alalc97: Kakusho",
				"given": "Takashi"
			},
			{
				"family": "\u4e2d\u6fa4",
				"given": "\u7be4\u5fd7"
			},
			{
				"family": ":ja-alalc97: Nakazawa",
				"given": "Atsushi"
			},
			{
				"family": "\u7af9\u6751",
				"given": "\u6cbb\u96c4"
			},
			{
				"family": ":ja-alalc97: Takemura",
				"given": "Haruo"
			},
			{
				"family": "\u7f8e\u6fc3",
				"given": "\u5c0e\u5f66"
			},
			{
				"family": ":ja-alalc97: Mino",
				"given": "Michihiko"
			},
			{
				"family": "\u9593\u702c",
				"given": "\u5065\u4e8c"
			},
			{
				"family": ":ja-alalc97: Mase",
				"given": "Kenji"
			}
		],
		"title": "\u9ad8\u7b49\u6559\u80b2\u6a5f\u95a2\u306b\u304a\u3051\u308b\u6b21\u4e16\u4ee3\u6559\u80b2\u5b66\u7fd2\u652f\u63f4\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u69cb\u7bc9\u306b\u5411\u3051\u3066 :ja-alalc97: K\u014dt\u014d ky\u014diku ni okeru jisedai ky\u014diku gakush\u016b shien puratto f\u014dmu no k\u014dchiku ni mukete :en: Toward the Development of Next-Generation Platforms for Teaching and Learning in Higher Education",
		"container-title": "\u65e5\u672c\u6559\u80b2\u5de5\u5b66\u4f1a\u8ad6\u6587\u8a8c",
		"volume": "31",
		"issue": "3",
		"page": "297-305",
		"issued": {
			"date-parts": [
				[
					2007,
					12
				]
			]
		},
        "note": "Note the transformations to which this cite is subjected in the samples above, and the fact that it appears in the correct sort position in all rendered forms.  Selection of multi-lingual content can be configured in the style, permitting one database to serve a multi-lingual author in all languages in which she might publish."

	},
	"ITEM-6": {
		"id": "ITEM-6",
		"title":"Evaluating Components of International Migration: Consistency of 2000 Nativity Data",
		"note": "This cite illustrates the formatting of institutional authors.  Note that there is no \"and\" between the individual author and the institution with which he is affiliated.",
		"author": [
			{
				"literal": "U.S. Bureau of the Census"
			},
			{
				"family": "Malone",
				"given": "Nolan J.",
				"static-ordering": false
			}
		],
		"publisher": "Routledge",
		"issued": {
			"date-parts":[
				[2001, 12, 5]
			]
		},
		"type": "book"
	}
};

