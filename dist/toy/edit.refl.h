#pragma once

#include <toy/edit.h>
#include <mud/refl.h>
#include <mud/infra.h>


#if !defined MUD_MODULES || defined MUD_TYPE_LIB
#endif

//#include <edit/Types.h>

#ifndef TOY_EDIT_REFL_EXPORT
#define TOY_EDIT_REFL_EXPORT MUD_IMPORT
#endif

namespace toy
{
	export_ class TOY_EDIT_REFL_EXPORT toy_edit : public mud::Module
	{
	private:
		toy_edit();
		
	public:
		static toy_edit& m() { static toy_edit instance; return instance; }
	};
}

#ifdef TOY_EDIT_MODULE
extern "C"
TOY_EDIT_REFL_EXPORT Module& getModule();
#endif


#if !defined MUD_MODULES || defined MUD_TYPE_LIB
#endif

namespace mud
{
	
}
