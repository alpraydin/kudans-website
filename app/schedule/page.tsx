export const metadata = {
  title: 'Schedule | KUDANS - Koç University Dance Club',
  description: 'Check out upcoming dance classes and performances by KUDANS',
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center">Dance Class Schedule</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Weekly schedule of dance classes and practices for 2025-2026 academic year
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-6 mb-16 border border-gray-700 w-full mx-auto">
          {/* Responsive Weekly Schedule */}
          {/* Desktop: 5-column grid, Mobile: stacked day-content pairs */}
          <div>
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-[1fr_1fr_1.8fr_1fr_1fr] gap-2 text-white">
            {/* Day Headers */}
            <div className="rounded-t-lg p-2 text-center bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-sm">Monday</div>
            <div className="rounded-t-lg p-2 text-center bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-sm">Tuesday</div>
            <div className="rounded-t-lg p-2 text-center bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-sm">Wednesday</div>
            <div className="rounded-t-lg p-2 text-center bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-sm">Thursday</div>
            <div className="rounded-t-lg p-2 text-center bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-sm">Friday</div>
            {/* Saturday removed */}
            {/* Sunday removed */}
              {/* Day Content Columns */}
              {/* Monday */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg min-h-[280px] shadow-lg">
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Modern L1</div>
                  <div className="text-blue-100">19:00 - 20:00</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Modern L2</div>
                  <div className="text-blue-100">20:15 - 21:15</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
              </div>
            </div>
              {/* Tuesday */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg min-h-[280px] shadow-lg">
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Modern Creation L2</div>
                  <div className="text-blue-100">18:30 - 20:00</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Hip Hop L1</div>
                  <div className="text-blue-100">20:00 - 21:15</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Hip Hop L2</div>
                  <div className="text-blue-100">21:30 - 23:00</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
              </div>
            </div>
              {/* Wednesday */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg min-h-[280px] shadow-lg">
              {/* Three-column grouping: Tango / Swing / (spacer) */}
              <div className="grid grid-cols-3 gap-2">
                {/* Tango Column */}
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">Tango L1</div>
                    <div className="text-blue-100">19:00 - 20:00</div>
                    <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">Tango L2</div>
                    <div className="text-blue-100">20:15 - 21:15</div>
                    <div className="text-blue-200 text-xs">Upstairs Dance Floor</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">Tango L3</div>
                    <div className="text-blue-100">21:30 - 22:30</div>
                    <div className="text-blue-200 text-xs">Upstairs Dance Floor</div>
                  </div>
                </div>
                {/* Swing Column */}
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">Swing L1</div>
                    <div className="text-blue-100">20:15 - 21:15</div>
                    <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">Swing Solo Jazz</div>
                    <div className="text-blue-100">21:30 - 22:30</div>
                    <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">Swing L2</div>
                    <div className="text-blue-100">22:45 - 23:45</div>
                    <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                  </div>
                </div>
                {/* International Latin Column */}
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">International Latin L1</div>
                    <div className="text-blue-100">19:00 - 20:00</div>
                    <div className="text-blue-200 text-xs">Omer B329</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">International Latin L2</div>
                    <div className="text-blue-100">20:15 - 21:15</div>
                    <div className="text-blue-200 text-xs">Omer B329</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                    <div className="font-semibold">International Latin Competition</div>
                    <div className="text-blue-100">21:30 - 22:30</div>
                    <div className="text-blue-200 text-xs">Omer B329</div>
                  </div>
                </div>
              </div>
            </div>
              {/* Thursday */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg min-h-[280px] shadow-lg">
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Social Latin L1</div>
                  <div className="text-blue-100">19:00 - 20:00</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Social Latin L2</div>
                  <div className="text-blue-100">20:15 - 21:15</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs sm:text-sm">
                  <div className="font-semibold">Social Latin L3</div>
                  <div className="text-blue-100">21:30 - 22:30</div>
                  <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                </div>
              </div>
            </div>
              {/* Friday */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg min-h-[280px] shadow-lg flex items-center justify-center h-[100px]">
              <div className="text-gray-400 italic text-center text-xs sm:text-sm">No Classes</div>
            </div>
              {/* Saturday - removed */}
              {/* Sunday - removed */}
            </div>

            {/* Mobile stacked layout */}
            <div className="md:hidden flex flex-col gap-4 text-white">
              {/* Monday */}
              <div>
                <div className="rounded-t-lg p-2 bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-base text-center">Monday</div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg shadow-lg">
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Modern L1</div>
                      <div className="text-blue-100">19:00 - 20:00</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Modern L2</div>
                      <div className="text-blue-100">20:15 - 21:15</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tuesday */}
              <div>
                <div className="rounded-t-lg p-2 bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-base text-center">Tuesday</div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg shadow-lg">
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Modern Creation L2</div>
                      <div className="text-blue-100">18:30 - 20:00</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Hip Hop L1</div>
                      <div className="text-blue-100">20:00 - 21:15</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Hip Hop L2</div>
                      <div className="text-blue-100">21:30 - 23:00</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Wednesday */}
              <div>
                <div className="rounded-t-lg p-2 bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-base text-center">Wednesday</div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg shadow-lg">
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Tango L1</div>
                      <div className="text-blue-100">19:00 - 20:00</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Tango L2</div>
                      <div className="text-blue-100">20:15 - 21:15</div>
                      <div className="text-blue-200 text-xs">Upstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Tango L3</div>
                      <div className="text-blue-100">21:30 - 22:30</div>
                      <div className="text-blue-200 text-xs">Upstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Swing L1</div>
                      <div className="text-blue-100">20:15 - 21:15</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Swing Solo Jazz</div>
                      <div className="text-blue-100">21:30 - 22:30</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Swing L2</div>
                      <div className="text-blue-100">22:45 - 23:45</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">International Latin L1</div>
                      <div className="text-blue-100">19:00 - 20:00</div>
                      <div className="text-blue-200 text-xs">Omer B329</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">International Latin L2</div>
                      <div className="text-blue-100">20:15 - 21:15</div>
                      <div className="text-blue-200 text-xs">Omer B329</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">International Latin Competition Team</div>
                      <div className="text-purple-100">21:30 - 22:30</div>
                      <div className="text-purple-200 text-xs">Omer B329</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Thursday */}
              <div>
                <div className="rounded-t-lg p-2 bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-base text-center">Thursday</div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg shadow-lg">
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Social Latin L1</div>
                      <div className="text-blue-100">19:00 - 20:00</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Social Latin L2</div>
                      <div className="text-blue-100">20:15 - 21:15</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-2 rounded-lg shadow-md text-xs">
                      <div className="font-semibold">Social Latin L3</div>
                      <div className="text-blue-100">21:30 - 22:30</div>
                      <div className="text-blue-200 text-xs">Downstairs Dance Floor</div>
                    </div>
                  </div>
                </div>
              </div>
               {/* Friday */}
              <div>
                <div className="rounded-t-lg p-2 bg-gradient-to-r from-gray-700 to-gray-600 font-bold text-base text-center">Friday</div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-b-lg shadow-lg flex items-center justify-center h-[100px]">
                  <div className="text-gray-400 italic text-center text-xs">No Classes</div>
                </div>
              </div>
              {/* Saturday - removed */}
              {/* Sunday - removed */}
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <div className="flex items-center bg-gray-800 px-2 py-1 rounded-full shadow-md text-xs">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 mr-1 shadow-inner"></div>
              <span className="text-gray-200">Regular Classes</span>
            </div>
            <div className="flex items-center bg-gray-800 px-2 py-1 rounded-full shadow-md text-xs">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 mr-1 shadow-inner"></div>
              <span className="text-gray-200">Performance Teams (GG)</span>
            </div>
            <div className="flex items-center bg-gray-800 px-2 py-1 rounded-full shadow-md text-xs">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-800 to-green-600 mr-1 shadow-inner"></div>
              <span className="text-gray-200">Practice Sessions</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Latest Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.instagram.com/reel/DHOepJTsBPk/embed?theme=dark" 
                className="w-full h-[450px]" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
              </div>
            
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.instagram.com/reel/DHG8mEOML9w/embed?theme=dark" 
                className="w-full h-[450px]" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
            </div>
            
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.instagram.com/reel/DHDtdf_MipS/embed?theme=dark" 
                className="w-full h-[450px]" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
              </div>
            
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.instagram.com/p/DDujSoftKFV/embed?theme=dark" 
                className="w-full h-[450px]" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
            </div>
            
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.instagram.com/p/DDopSL2Ne7D/embed?theme=dark" 
                className="w-full h-[450px]" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
              </div>
            
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.instagram.com/p/C6nl-ADNJEr/embed?theme=dark" 
                className="w-full h-[450px]" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 